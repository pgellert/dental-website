import Link from "next/link";

export const data = {
  en: {
    end_of_article: [
      <p>If you have any questions about the dental procedures at Perident Dentistry, or if you would like to make an appointment, please call us at <a href="tel:+36-20-567-5678">+36-20-567-5678</a> or email us at <a href="mailto:info@perident.hu">info@perident.hu</a>.</p>,
      <p>Our dental praxis is located at Gyor in the wester part of Hungary. Our address is 9024 GYŐR, Nagy Imre út 93. For more information on how you can contact us and how to get to our praxis, click <Link href="/contact-us">here</Link>.</p>,
    ],
  },
  hu: {
    end_of_article: [
      <p>Ha kérdése van a Perident Fogászat fogászati kezelésivel kapcsolatban, vagy időpontot szeretne foglalni, hívjon minket a <a href="tel:+36-20-567-5678">+36-20-567-5678</a> vagy írjon nekünk e-mailt az <a href="mailto:info@perident.hu">info@perident.hu</a> címre.</p>,
      <p>Fogászati rendelőnk Magyarország nyugati részén, Győrben található. Címünk: 9024 GYŐR, Nagy Imre út 93. Ha többet szeretne megtudni arról, hogyan léphet kapcsolatba velünk, és hogyan juthat el praxisunkba, kattintson <Link href="/contact-us">ide</ Link>.</p>,
    ],
  },
  de: {
    end_of_article: [
      <p>Wenn Sie Fragen zu den zahnärztlichen Verfahren bei Perident Dentistry haben oder einen Termin vereinbaren möchten, rufen Sie uns bitte an unter <a href="tel:+36-20-567-5678">+36-20-567-5678</a> oder senden Sie uns eine E-Mail an <a href="mailto:info@perident.hu">info@perident.hu</a>.</p>,
      <p>Unsere Zahnarztpraxis befindet sich in Györ im Westen Ungarns. Unsere Adresse ist 9024 GYŐR, Nagy Imre út 93. Für weitere Informationen darüber, wie Sie uns kontaktieren können und wie Sie zu unserer Praxis gelangen, klicken Sie <Link href="/contact-us">hier</ Link>.</p>,
    ]
  },
}
