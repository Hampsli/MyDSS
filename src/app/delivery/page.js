'use client';

import MainMenu from '../components/MainMenu';

import styles from './page.module.css';

export default function Nutrition() {
  return (
    <>
      <MainMenu />

      <div className="container">
        <h1>Frequently Asked Questions</h1>

        <div className={styles.faqcontent}>
          <h2>
            Is free shipping on purchases over $25 available on all products?
          </h2>

          <p>
            Things sold and delivered by e-store are eligible, as are things
            sold by marketplace sellers when e-store is the dispatcher. You can
            combine qualifying goods worth less than $25 to produce an order
            worth more than $25 and qualify for free delivery.
          </p>
        </div>

        <div className={styles.faqcontent}>
          <h2>
            How can I order and pick up from an e-store Hub Locker or Gateway?
          </h2>

          <p>
            When you're all set to place your order, choose e-store Hub as your
            delivery address. We will send you an acknowledgement message with a
            barcode once your delivery arrives. Simply go to your chosen Locker
            or Gateway to pick up your package. Have your pickup message of
            confirmation with the barcode available when you arrive. You will
            scan the barcode yourself at the Locker; at the Gateway, the store
            clerk will check it before handing you your product. There is no
            need to provide identification while picking up.
          </p>
        </div>
      </div>
    </>
  );
}