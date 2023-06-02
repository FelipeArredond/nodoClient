import { useEffect, useState } from "react";
import { GeneratePaymentReference, PostSubDetail, TransactionStatus } from "../../services/apiRequests";
import moment from "moment";

/* eslint-disable react/no-unknown-property */
export default function PaymentPage() {
  const [idPago, setIdPago] = useState("");
  const [paymentReference, setPaymentReference] = useState("");
  const [userData, setUserData] = useState({});

  useEffect(() => {
    let now = new Date();
    let date = now.toISOString();
    setUserData(JSON.parse(localStorage.getItem("auth")))
    GeneratePaymentReference({date})
      .then(res => {
        setPaymentReference(res.idPaymentReference);
      })
    setIdPago(window.location.href.slice(window.location.href.indexOf("=") + 1).split("&")[0])
    if(idPago != ""){
      TransactionStatus(idPago)
        .then(res => {
          console.log(res)
          if(res.data.status == "APPROVED"){
            console.log("aprobado")
            let now_sub = new Date();
            let started_sub = now_sub.toISOString();
            let end_date = moment(started_sub).add(1, 'month');
            PostSubDetail({
              idSub: 2,
              idPerson: userData.idPerson,
              startDate: started_sub,
              endDate:  end_date
            }).then(res => console.log(res))
          }
        });
    }
  },[idPago])

  return (
    <>
      <h1>Pagos</h1>
      <form action="https://checkout.wompi.co/p/" method="GET">
        <input
          type="hidden"
          name="public-key"
          value="pub_test_XncM5fEQFg0MHbkKM7noluAnOWuT131G"
        />
        <input type="hidden" name="currency" value="COP" />
        <input type="hidden" name="amount-in-cents" value="7000000" />
        <input type="hidden" name="reference" value={paymentReference} />
        <input type="hidden" name="redirect-url" value="http://localhost:5173/pagos" />
        <button type="submit">Pagar con Wompi</button>
      </form>
    </>
  );
}
