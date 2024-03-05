'use client';

import styles from './page.module.css';

/* import MainMenu from './components/MainMenu';
 */
export default function Home() {
  return (
    <>
{/*       <MainMenu />
 */}
      <div className="container">
        <main className={styles.maincontent}>
          <div className={styles.contentbox}>
            <h1>Sony WH-1000XM5 Noise Cancelling Wireless Headphones</h1>

            <p>
              For total convenience, these Bluetooth headphones can be paired
              with two devices at the same time.
            </p>
          </div>

          <div className={styles.contentbox}>
            <h1>PlayStation 5 Console</h1>

            <p>
              The PS5 console unleashes new gaming possibilities that you never
              anticipated
            </p>
          </div>

          <div className={styles.contentbox}>
            <h1>Xbox Series X</h1>

            <p>
              Introducing Xbox Series X, the fastest, most powerful Xbox ever.
            </p>
          </div>

          <div className={styles.contentbox}>
            <h1>SanDisk Extreme Pro 2TB Portable NVMe SSD</h1>

            <p>
              A forged aluminum chassis acts as a heat sink to deliver higher
              sustained speeds in a portable drive that’s tough enough to take
              on any adventure.
            </p>
          </div>

          <div className={styles.contentbox}>
            <h1>Apple 2023 MacBook Pro laptop M2 Pro</h1>

            <p>Take on demanding projects with the M2 Pro or M2 Max chip.</p>
          </div>

          <div className={styles.contentbox}>
            <h1>Samsung 43 Inch BU8000 UHD Crystal 4K Smart TV</h1>

            <p>
              Immerse Yourself In Exceptional Colour All In 4K - Dynamic Crystal
              Colour delivers a new level of UHD, allowing you to experience a
              billion shades of colour for a lifelike, vivid picture.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}