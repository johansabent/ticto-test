import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

function emailHtml(firstName: string): string {
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Inscrição confirmada — Ticto × Ebulição</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color:#f4f4f5;">
    <tr>
      <td align="center" style="padding:40px 16px;">
        <table cellpadding="0" cellspacing="0" role="presentation" style="max-width:560px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background-color:#030712;border-radius:16px 16px 0 0;padding:40px 40px 36px;text-align:center;">
              <p style="margin:0 0 16px;color:#5BBED9;font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;">TICTO &times; EBULIÇÃO</p>
              <h1 style="margin:0;color:#ffffff;font-size:30px;font-weight:700;line-height:1.25;">Você está dentro! 🎉</h1>
              <p style="margin:16px 0 0;color:#8b9ab5;font-size:15px;line-height:1.5;">Sua inscrição no evento foi confirmada.</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background-color:#ffffff;padding:40px;">

              <!-- Greeting -->
              <p style="margin:0 0 12px;color:#0d0b1a;font-size:18px;font-weight:600;">Olá, ${firstName}!</p>
              <p style="margin:0 0 32px;color:#6b7280;font-size:15px;line-height:1.6;">
                Você acabou de garantir sua vaga no <strong style="color:#0d0b1a;">Ebulição by Rafa Prado</strong> e já está concorrendo ao sorteio exclusivo do evento.
              </p>

              <!-- Prize highlight -->
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin-bottom:36px;">
                <tr>
                  <td style="background-color:#5BBED9;border-radius:12px;padding:28px;text-align:center;">
                    <p style="margin:0 0 6px;color:rgba(255,255,255,0.8);font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;">Prêmio do sorteio</p>
                    <p style="margin:0;color:#ffffff;font-size:28px;font-weight:700;line-height:1.2;">📱 iPhone 16 Pro</p>
                  </td>
                </tr>
              </table>

              <!-- Steps -->
              <p style="margin:0 0 20px;color:#0d0b1a;font-size:15px;font-weight:700;">Como funciona o sorteio:</p>

              <!-- Step 1 (done) -->
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin-bottom:14px;">
                <tr>
                  <td width="36" style="vertical-align:top;">
                    <table cellpadding="0" cellspacing="0" role="presentation">
                      <tr>
                        <td style="width:32px;height:32px;background-color:#5BBED9;border-radius:50%;text-align:center;vertical-align:middle;color:#ffffff;font-size:14px;font-weight:700;line-height:32px;">✓</td>
                      </tr>
                    </table>
                  </td>
                  <td style="padding-left:14px;vertical-align:middle;">
                    <p style="margin:0;color:#9ca3af;font-size:14px;line-height:1.5;text-decoration:line-through;">Crie sua conta no formulário</p>
                  </td>
                </tr>
              </table>

              <!-- Step 2 -->
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin-bottom:14px;">
                <tr>
                  <td width="36" style="vertical-align:top;">
                    <table cellpadding="0" cellspacing="0" role="presentation">
                      <tr>
                        <td style="width:32px;height:32px;background-color:#f3f4f6;border-radius:50%;text-align:center;vertical-align:middle;color:#6b7280;font-size:14px;font-weight:700;line-height:32px;">2</td>
                      </tr>
                    </table>
                  </td>
                  <td style="padding-left:14px;vertical-align:middle;">
                    <p style="margin:0;color:#0d0b1a;font-size:14px;line-height:1.5;">Deposite seu nome na <strong>urna no stand da Ticto</strong></p>
                  </td>
                </tr>
              </table>

              <!-- Step 3 -->
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin-bottom:36px;">
                <tr>
                  <td width="36" style="vertical-align:top;">
                    <table cellpadding="0" cellspacing="0" role="presentation">
                      <tr>
                        <td style="width:32px;height:32px;background-color:#f3f4f6;border-radius:50%;text-align:center;vertical-align:middle;color:#6b7280;font-size:14px;font-weight:700;line-height:32px;">3</td>
                      </tr>
                    </table>
                  </td>
                  <td style="padding-left:14px;vertical-align:middle;">
                    <p style="margin:0;color:#0d0b1a;font-size:14px;line-height:1.5;">Aguarde o <strong>sorteio presencialmente</strong> no stand da Ticto</p>
                  </td>
                </tr>
              </table>

              <!-- CTA -->
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                  <td align="center">
                    <a href="https://ticto.com.br"
                       style="display:inline-block;background-color:#5BBED9;color:#ffffff;text-decoration:none;font-size:15px;font-weight:700;padding:16px 44px;border-radius:66px;letter-spacing:0.2px;">
                      Conhecer a Ticto &rarr;
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#f9fafb;border-radius:0 0 16px 16px;padding:24px 40px;border-top:1px solid #e5e7eb;text-align:center;">
              <p style="margin:0 0 6px;color:#9ca3af;font-size:12px;line-height:1.5;">© 2025 Ticto Tecnologia — Todos os direitos reservados.</p>
              <p style="margin:0;color:#9ca3af;font-size:12px;line-height:1.5;">Você recebeu este email por ter se cadastrado no evento Ebulição.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function POST(req: NextRequest) {
  try {
    const { name, email } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ error: 'name and email are required' }, { status: 400 });
    }

    const firstName = name.trim().split(' ')[0];

    const { error } = await resend.emails.send({
      from: 'Ticto × Ebulição <onboarding@test.johanpigari.me>',
      to: [email],
      subject: `🎉 ${firstName}, você está concorrendo ao iPhone 16 Pro!`,
      html: emailHtml(firstName),
    });

    if (error) {
      console.error('[send-email] Resend error:', error);
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[send-email] Unexpected error:', err);
    return NextResponse.json({ error: 'internal error' }, { status: 500 });
  }
}
