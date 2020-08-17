const nodemailer = require("nodemailer")


//const user = process.env.EMAIL;
//const pass = process.env.SENHA;

const user = "flordemaracuja@apiflor.com.br"
const pass = "sampler1305#"



const enviaEmail = async (tipo, valor, email) => {

    const transporte = nodemailer.createTransport({
        host: "smtp.umbler.com",
        port: 587,
        auth: {
            user,
            pass
        }
    })


    let info = await transporte.sendMail({
        from: user, // sender address
        to: email, // list of receivers
        subject: "O ESPAÇO FLOR DE MARACUJÁ AGREDECE SUA PREFERÊNCIA ✔", // Subject line
        text: "O espaço flor de maracuja estará sempre pronto para lhe atender", // plain text body
        html: `

         <div style =  "display: block;background-color: #4C4CDA ; text-align: center; color:white">
          <h1  style="padding:1%;background-color:#FFC733;color:black" >O espaço flor de maracujá estará sempre pronto para lhe atender !!!!!!!!!</h1>
           
            <div style="margin-top:10px; " >
                <h1 >Serviços Realizados</h1>
                <h2>${tipo}</h2>
                <h1>Valor total</h1>
                <h1 style="padding:10px">R$:${valor}</h1>
        </div>
        </div>`
        , // html body
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

module.exports = enviaEmail
