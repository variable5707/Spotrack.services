templateMail = (username, subject, mailTitle,name, mail, message, attachment)=>{

    if (attachment && attachment.length >0 ){
        return {
                from: process.env.email,
                to: username,
                    subject: subject,
                    text: 'Please find the attached resume file',
                    attachments: attachment
                  }
    }

else {
    return{
        from: process.env.email,
  to: username,
  subject: subject,
  html: `<div>
  <style type="text/css">
      .rps_26bb #x_outlook a {
          padding: 0
      }

      .rps_26bb>div {
          margin: 0;
          padding: 0
      }

      .rps_26bb table,
      .rps_26bb td {
          border-collapse: collapse
      }

      .rps_26bb img {
          border: 0;
          height: auto;
          line-height: 100%;
          outline: none;
          text-decoration: none
      }

      .rps_26bb p {
          display: block;
          margin: 13px 0
      }
  </style>
  <style type="text/css">


  </style>
  <style type="text/css">
      @media only screen and (min-width:480px) {
          .rps_26bb .x_mj-column-per-100 {
              width: 100% !important;
              max-width: 100%
          }

      }
  </style>
  <style media="screen and (min-width:480px)">
      .rps_26bb .x_moz-text-html .x_mj-column-per-100 {
          width: 100% !important;
          max-width: 100%
      }
  </style>
  <style type="text/css">
      @media only screen and (max-width:480px) {
          .rps_26bb table.x_mj-full-width-mobile {
              width: 100% !important
          }

          .rps_26bb td.x_mj-full-width-mobile {
              width: auto !important
          }

      }
  </style>
  <style type="text/css">
      .rps_26bb .x_mj-purple-text {
          color: #3762DD !important
      }

      .rps_26bb .x_table-section {
          padding: 0 !important
      }

      .rps_26bb .x_know-more div {
          padding: 0 10px
      }

      .rps_26bb .x_table-col {
          border-radius: 8px;
          border: 2px solid #E8EEFF;
          overflow: hidden;
          border-collapse: collapse
      }

      .rps_26bb .x_td-left {
          font-size: 14px;
          color: #98A2B3;
          width: 50%;
          padding-bottom: 8px
      }

      .rps_26bb .x_td-right {
          font-size: 14px;
          color: #667085;
          font-weight: 700;
          padding-bottom: 8px
      }

      .rps_26bb .x_ab-section {
          padding: 0 16px
      }

      .rps_26bb .x_ab-section .x_ab-col {
          border-radius: 8px;
          overflow: hidden
      }

      .rps_26bb .x_ab-section .x_ab-col .x_ab-title div {
          font-size: 14px;
          font-weight: bold;
          padding: 13px 28px
      }

      .rps_26bb .x_ab-table>table {
          border-collapse: separate;
          border-spacing: 0 10px
      }

      .rps_26bb .x_footer {
          padding: 0 16px
      }

      .rps_26bb .x_footer-col {
          border-radius: 8px;
          overflow: hidden
      }

      .rps_26bb .x_footer .x_footer-text div {
          font-size: 12px;
          padding: 0 32px
      }

      .rps_26bb .x_header-text div {
          padding: 0 16px;
          font-size: 18px !important;
          color: #344054 !important;
          font-weight: bold
      }

      .rps_26bb .x_subheader-text div {
          font-size: 14px;
          padding: 0 32px
      }

      @media (min-width:480px) {
          .rps_26bb .x_header-text div {
              padding: 0 64px !important;
              font-size: 32px !important;
              line-height: 54px !important
          }

          .rps_26bb .x_subheader-text div {
              padding: 0 96px !important;
              font-size: 16px !important
          }

          .rps_26bb .x_table-section .x_table-col {
              padding: 20px 25px !important
          }

          .rps_26bb .x_table-section .x_table-col .x_table-col-text div {
              font-size: 18px !important
          }

          .rps_26bb .x_td-left {
              font-size: 16px !important;
              padding-bottom: 16px !important
          }

          .rps_26bb .x_td-right {
              font-size: 16px !important;
              padding-bottom: 16px !important
          }

          .rps_26bb .x_know-more div {
              padding: 0 80px !important;
              font-size: 16px !important
          }

          .rps_26bb .x_footer {
              padding: 0 !important
          }

          .rps_26bb .x_footer .x_footer-col .x_footer-text div {
              font-size: 14px !important;
              padding: 0 108px !important
          }

          .rps_26bb .x_ab-table .x_ab-td-logo {
              padding: 14px 28px !important
          }

          .rps_26bb .x_ab-section .x_ab-col .x_ab-title div {
              font-size: 16px !important;
              padding: 24px 124px !important
          }

          .rps_26bb .x_ab-table {
              padding: 0 48px !important
          }

          .rps_26bb .x_ab-table table {
              border-spacing: 0 18px !important
          }

          .rps_26bb .x_ab-table .x_ab-td-data {
              padding: 22px 20px !important
          }

          .rps_26bb .x_ab-table .x_ab-td-data p {
              font-size: 14px !important
          }

      }
  </style>
  <div class="rps_26bb">
      <div style="word-spacing:normal; background-color:#ffffff">
          <div style="background-color:#ffffff">
              <div style="background:#ffffff; background-color:#ffffff; margin:0px auto; max-width:600px">
                  <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
                      style="background:#ffffff; background-color:#ffffff; width:100%">
                      <tbody>
                          <tr>
                              <td style="direction:ltr; font-size:0px; padding:0px; text-align:center">
                                  <div class="x_mj-column-per-100 x_mj-outlook-group-fix"
                                      style="font-size:0px; text-align:left; direction:ltr; display:inline-block; vertical-align:top; width:100%">
                                      <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                                          width="100%" style="background-color:#ffffff; vertical-align:top">
                                          <tbody>
                                              <tr>
                                                  <td align="center"
                                                      style="font-size:0px; padding:10px 25px;  padding-top:40px; word-break:break-word">
                                                      <table border="0" cellpadding="0" cellspacing="0"
                                                          role="presentation"
                                                          style="border-collapse:collapse;  border-spacing:0px">
                                                          <tbody>
                                                              <tr>
                                                                  <td style="width:250px"><img
                                                                          data-imagetype="External"
                                                                          src="https://spotrack.in/static/media/ProductLogo.d18db7dca564d4ec082d.png"
                                                                          alt="Logo" height="auto" width="150"
                                                                          style="border:0;  display:block; outline:none; text-decoration:none; height:auto; width:100%; font-size:13px">
                                                                  </td>
                                                              </tr>
                                                          </tbody>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </div>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
              <div style="background:#ffffff; background-color:#ffffff; margin:0px auto; max-width:600px">
                  <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
                      style="background:#ffffff; background-color:#ffffff; width:100%">
                      <tbody>
                          <tr>
                              <td style="direction:ltr; font-size:0px; padding:0px; text-align:center">
                                  <div class="x_mj-column-per-100 x_mj-outlook-group-fix"
                                      style="font-size:0px; text-align:left; direction:ltr; display:inline-block; vertical-align:top; width:100%">
                                      <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                                          width="100%" style="background-color:#ffffff; vertical-align:top">
                                          <tbody>
                                              <tr>
                                                  <td style="font-size:0px; word-break:break-word">
                                                      <div style="height:21px; line-height:21px"> </div>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </div>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
              <div style="background:#ffffff; background-color:#ffffff; margin:0px auto; max-width:620px">
                  <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
                      style="background:#ffffff; background-color:#ffffff; width:100%">
                      <tbody>
                          <tr>
                              <td style="direction:ltr; font-size:0px; padding:0px; text-align:center">
                                  <div class="x_mj-column-per-100 x_mj-outlook-group-fix"
                                      style="font-size:0px; text-align:left; direction:ltr; display:inline-block; vertical-align:top; width:100%">
                                      <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                                          width="100%" style="background-color:#ffffff; vertical-align:top">
                                          <tbody>
                                              <tr>
                                                  <td align="center" class="x_header-text"
                                                      style="font-size:0px; padding:0px; word-break:break-word">
                                                      <div
                                                          style="font-family: Arial, sans-serif, serif, EmojiFont; font-size: 14px; line-height: 24px; text-align: center; color: rgb(102, 112, 133);">
                                                          ${mailTitle}
                                                      </div>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </div>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
              <div style="background:#ffffff; background-color:#ffffff; margin:0px auto; max-width:600px">
                  <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
                      style="background:#ffffff; background-color:#ffffff; width:100%">
                      <tbody>
                          <tr>
                              <td style="direction:ltr; font-size:0px; padding:0px; text-align:center">
                                  <div class="x_mj-column-per-100 x_mj-outlook-group-fix"
                                      style="font-size:0px; text-align:left; direction:ltr; display:inline-block; vertical-align:top; width:100%">
                                      <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                                          width="100%" style="background-color:#ffffff; vertical-align:top">
                                          <tbody>
                                              <tr>
                                                  <td style="font-size:0px; word-break:break-word">
                                                      <div style="height:16px; line-height:16px"> </div>
                                                  </td>
                                              </tr>

                                          </tbody>
                                      </table>
                                  </div>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
              <div style="background:#ffffff; background-color:#ffffff; margin:0px auto; max-width:600px">
                  <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
                      style="background:#ffffff; background-color:#ffffff; width:100%">
                      <tbody>
                          <tr>
                              <td style="direction:ltr; font-size:0px; padding:0px; text-align:center">
                                  <div class="x_mj-column-per-100 x_mj-outlook-group-fix"
                                      style="font-size:0px; text-align:left; direction:ltr; display:inline-block; vertical-align:top; width:100%">
                                      <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                                          width="100%" style="background-color:#ffffff; vertical-align:top">
                                          <tbody>
                                              <tr>
                                                  <td style="font-size:0px; word-break:break-word">
                                                      <div style="height:16px; line-height:16px"> </div>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td align="center" class="x_subheader-text"
                                                      style="font-size:0px; padding:0px; word-break:break-word">
                                                      <div
                                                          style="font-family: Arial, sans-serif, serif, EmojiFont; font-size: 18px; line-height: 24px; text-align: center; color: rgb(102, 112, 133);">
                                                          <b>  Name  :- ${name},<br>Email : ${mail} <br> Message :-${message}
                                                      </div>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </div>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
              <!-- <div style="background:#ffffff; background-color:#ffffff; margin:0px auto; max-width:600px">
                  <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
                      style="background:#ffffff; background-color:#ffffff; width:100%">
                      <tbody>
                          <tr>
                              <td style="direction:ltr; font-size:0px; padding:0px; text-align:center">
                                  <div class="x_mj-column-per-100 x_mj-outlook-group-fix"
                                      style="font-size:0px; text-align:left; direction:ltr; display:inline-block; vertical-align:top; width:100%">
                                      <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                                          width="100%" style="background-color:#ffffff; vertical-align:top">
                                          <tbody>
                                              <tr>
                                                  <td style="font-size:0px; word-break:break-word">
                                                      <div style="height:24px; line-height:24px"> </div>
                                                  </td>
                                              </tr>

                                              <tr>
                                                  <td style="font-size:0px; word-break:break-word">
                                                      <div style="height:24px; line-height:24px"> </div>
                                                  </td>
                                              </tr>

                                              <tr>
                                                  <td style="font-size:0px; word-break:break-word">
                                                      <div style="height:18px; line-height:18px"> </div>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </div>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div> -->
              <!-- <div class="x_footer"
                  style="background:#ffffff; background-color:#ffffff; margin:0px auto; max-width:600px">
                  <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
                      style="background:#ffffff; background-color:#ffffff; width:100%">
                      <tbody>
                          <tr>
                              <td style="direction:ltr; font-size:0px; padding:0px; text-align:center">
                                  <div class="x_mj-column-per-100 x_mj-outlook-group-fix x_footer-col"
                                      style="font-size:0px; text-align:left; direction:ltr; display:inline-block; vertical-align:top; width:100%">
                                      <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                                          width="100%">
                                          <tbody>
                                              <tr>
                                                  <td
                                                      style="background: linear-gradient(to right, #693dab, #cd29a2); vertical-align:top; padding:24px 0">
                                                      <table border="0" cellpadding="0" cellspacing="0"
                                                          role="presentation" width="100%" style="">
                                                          <tbody>
                                                              <tr>
                                                                  <td align="center" class="x_footer-text"
                                                                      style="font-size:0px; padding:0px; word-break:break-word">
                                                                      <div
                                                                          style="font-family: Arial, sans-serif, serif, EmojiFont; font-size: 14px; line-height: 24px; text-align: center; color:#ffffff;">
                                                                          If you have any questions, please feel
                                                                          free to reach out to us <a
                                                                              href="mailto:pairnfork@gmail.com"
                                                                              target="_blank"
                                                                              rel="noopener noreferrer"
                                                                              data-auth="NotApplicable"
                                                                              style="text-decoration:none; color:#e6e6e6"
                                                                              data-linkindex="2">pairnfork@gmail.com</a>
                                                                      </div>
                                                                  </td>
                                                              </tr>
                                                              <tr>
                                                                  <td
                                                                      style="font-size:0px; word-break:break-word">
                                                                      <div style="height:16px; line-height:16px"> 
                                                                      </div>
                                                                  </td>
                                                              </tr>
                                                              <tr>
                                                                  <td align="left"
                                                                      style="font-size:0px; padding:0; word-break:break-word">
                                                                      <table cellpadding="0" cellspacing="0"
                                                                          width="100%" border="0"
                                                                          style="color:#000000; font-family:Ubuntu,Helvetica,Arial,sans-serif; font-size:13px; line-height:22px; table-layout:auto; width:100%; border:none">
                                                                          <tbody>
                                                                              <tr>
                                                                                  <td
                                                                                      style="text-align:center; padding-left:15px">
                                                                                      <a href="" target="_blank"
                                                                                          rel="noopener noreferrer"
                                                                                          data-auth="NotApplicable"
                                                                                          data-linkindex="4"><img
                                                                                              data-imagetype="External"
                                                                                              src="https://pairnfork.com/images/Pair_N_Forkk4.png"
                                                                                              width="250px"
                                                                                              alt="Logo" 
                                                                                              ></a>
                                                                                  </td>
                                                                              </tr>
                                                                          </tbody>
                                                                      </table>
                                                                  </td>
                                                              </tr>
                                                              <tr>
                                                                  <td
                                                                      style="font-size:0px; word-break:break-word">
                                                                      <div style="height:16px; line-height:16px"> 
                                                                      </div>
                                                                  </td>
                                                              </tr>
                                                              <tr>
                                                                  <td align="center"
                                                                      style="font-size:0px; padding:0px; word-break:break-word">
                                                                      <div
                                                                          style="font-family: Arial, sans-serif, serif, EmojiFont; font-size: 14px; line-height: 24px; text-align: center; color: #ffffff;">
                                                                          Copyright © 2024 <span
                                                                              data-markjs="true"
                                                                              class="markigeavgceb" data-ogac=""
                                                                              data-ogab="" data-ogsc=""
                                                                              data-ogsb=""
                                                                              style=" color: #ffffff;">Pair N Fork</span>
                                                                      </div>
                                                                  </td>
                                                              </tr>
                                                          </tbody>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </div>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div> -->
          </div>
      </div>
  </div>
</div>`
    }
};
}

module.exports = templateMail;