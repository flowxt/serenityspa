import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validation des champs requis
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Les champs nom, email et message sont obligatoires" },
        { status: 400 }
      );
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Format d'email invalide" },
        { status: 400 }
      );
    }

    // Envoyer l'email via Resend
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["ns.serenityspa@gmail.com"],
      subject: `${subject || "Nouveau message de contact"} - ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { 
                font-family: 'Arial', sans-serif; 
                line-height: 1.6; 
                color: #333; 
                max-width: 600px; 
                margin: 0 auto; 
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #f5e6d3 0%, #e8d5c4 100%);
                padding: 30px;
                border-radius: 10px;
                text-align: center;
                margin-bottom: 30px;
              }
              .header h1 {
                color: #8b4513;
                margin: 0;
                font-size: 28px;
              }
              .content {
                background: #fff;
                padding: 30px;
                border-radius: 10px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
              }
              .field {
                margin-bottom: 20px;
                padding: 15px;
                background: #f9f9f9;
                border-radius: 5px;
                border-left: 4px solid #8b4513;
              }
              .field strong {
                color: #8b4513;
                display: block;
                margin-bottom: 5px;
              }
              .message-content {
                background: #f0f8f0;
                padding: 20px;
                border-radius: 8px;
                border-left: 4px solid #4caf50;
                font-style: italic;
                margin-top: 20px;
              }
              .footer {
                text-align: center;
                margin-top: 30px;
                padding: 20px;
                color: #666;
                border-top: 1px solid #eee;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>🌸 Nouveau Message - Serenity Spa</h1>
            </div>
            
            <div class="content">
              <div class="field">
                <strong>👤 Nom :</strong>
                ${name}
              </div>
              
              <div class="field">
                <strong>📧 Email :</strong>
                <a href="mailto:${email}">${email}</a>
              </div>
              
              ${
                phone
                  ? `
              <div class="field">
                <strong>📞 Téléphone :</strong>
                <a href="tel:${phone}">${phone}</a>
              </div>
              `
                  : ""
              }
              
              ${
                subject
                  ? `
              <div class="field">
                <strong>📋 Sujet :</strong>
                ${subject}
              </div>
              `
                  : ""
              }
              
              <div class="message-content">
                <strong>💬 Message :</strong><br>
                ${message.replace(/\n/g, "<br>")}
              </div>
            </div>
            
            <div class="footer">
              <p>Message reçu depuis le site web Serenity Spa</p>
              <p>Répondez directement à cet email pour contacter le client</p>
            </div>
          </body>
        </html>
      `,
      replyTo: email,
    });

    console.log("Email envoyé avec succès:", data);

    return NextResponse.json(
      {
        message: "Message envoyé avec succès",
        id: data.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);

    return NextResponse.json(
      {
        error: "Erreur lors de l'envoi du message. Veuillez réessayer.",
        details:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}
