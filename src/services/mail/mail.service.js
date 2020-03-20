const nodemailer = require('nodemailer')

const config = require('../../config')

const send = async (from, to, subject, text, html, attachments) => {
  try {
    const transport = config.nodemailer.transport === 'smtp' ? config.nodemailer.smtp : {
      sendmail: true,
      newline: 'unix',
      path: '/usr/sbin/sendmail'
    }
    const transporter = nodemailer.createTransport(transport)
    const result = await transporter.sendMail({
      from,
      to,
      subject,
      text,
      html,
      attachments
    })
    if (config.debug === 'true') {
      console.log(to, subject, text)
    }
    return result
  } catch (e) {
    if (config.debug === 'true') {
      console.error(e.message)
      console.log(to, subject, text)
    }
    return {
      error: e.message
    }
  }
}

module.exports = {
  send
}
