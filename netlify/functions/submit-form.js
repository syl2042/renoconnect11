const Airtable = require('airtable');
const { Resend } = require('resend');

// Initialiser Airtable et Resend en utilisant les variables d'environnement de Netlify
const base = new Airtable({ apiKey: process.env.AIRTABLE_TOKEN }).base(process.env.AIRTABLE_BASE_ID);
const resend = new Resend(process.env.RESEND_API_KEY);

// Destinataires des emails
const recipients = ['srey@aveo.fr', 'stetienne@aveo.fr'];

exports.handler = async function(event) {
  // Gérer les requêtes OPTIONS pour CORS
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: ''
    };
  }

  // Vérifier que la requête est de type POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // Récupérer les données du formulaire depuis le body de la requête
    const formData = JSON.parse(event.body);
    console.log('Form data received:', formData);

    // Créer un enregistrement dans Airtable
    const record = await base(process.env.AIRTABLE_TABLE_ID).create({
      'Nom': formData.name,
      'Email': formData.email,
      'Téléphone': formData.phone,
      'Code_Postal': formData.postal_code,
      'Message': formData.message
    });

    console.log('Record created in Airtable:', record.id);

    // Envoyer un email de notification avec Resend
    const emailData = await resend.emails.send({
      from: 'RenoConnect <contact@renoconnect.fr>',
      to: recipients,
      subject: 'RDV Renoconnect',
      text: `
Ceci est une demande faite par le site RénoConnect

Nom : ${formData.name}
Email : ${formData.email}
Téléphone : ${formData.phone}
Code Postal : ${formData.postal_code}

Message :
${formData.message}
      `
    });

    console.log('Email sent:', emailData);

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        success: true,
        message: 'Message envoyé avec succès. Nous vous recontacterons dans les plus brefs délais.'
      })
    };

  } catch (error) {
    console.error('Error:', error);
    
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        success: false,
        error: error.message
      })
    };
  }
};
