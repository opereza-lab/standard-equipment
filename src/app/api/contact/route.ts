import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { nombre, empresa, email, mensaje } = await req.json();

    if (!nombre || !empresa || !email || !mensaje) {
      return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Formulario Web <onboarding@resend.dev>",
        to: "contacto@standard-equipment.cl",
        reply_to: email,
        subject: `Consulta de ${nombre} — ${empresa}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #e07820;">Nueva consulta desde el sitio web</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px; font-weight: bold; color: #333;">Nombre:</td>
                <td style="padding: 8px; color: #555;">${nombre}</td>
              </tr>
              <tr style="background: #f9f9f9;">
                <td style="padding: 8px; font-weight: bold; color: #333;">Empresa:</td>
                <td style="padding: 8px; color: #555;">${empresa}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold; color: #333;">Email:</td>
                <td style="padding: 8px; color: #555;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr style="background: #f9f9f9;">
                <td style="padding: 8px; font-weight: bold; color: #333; vertical-align: top;">Mensaje:</td>
                <td style="padding: 8px; color: #555;">${mensaje}</td>
              </tr>
            </table>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const error = await res.json();
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Error al enviar el correo" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error:", err);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}
