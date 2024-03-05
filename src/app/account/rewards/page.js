'use client';

import { useSession, signIn, signOut } from 'next-auth/react';

import { useQuery } from '@apollo/client';

import { GET_REWARDS } from '../../queries/clientQueries';

import withApollo from '../../utils/withApollo';

import MainMenu from '../../components/MainMenu';

import styles from './page.module.css';

const Rewards = () => {
  const { loading, error, data } = useQuery(GET_REWARDS);

  const { data: session, status } = useSession();

  const userEmail = session?.user?.email;

  if (loading)
    return (
      <>
        <MainMenu />

        <div className="container">
          <h1>Loading...</h1>
        </div>
      </>
    );

  if (error)
    return (
      <>
        <MainMenu />

        <div className="container">
          <h1>Oh no there is an error :(</h1>
        </div>
      </>
    );

  if (status === 'loading') {
    return <div>Please wait...</div>;
  }

  if (status === 'authenticated') {
    return (
      <>
        <MainMenu />

        <div className="container">
          <div className={styles.signinflow}>
            <p>Signed in as {userEmail}</p>

            <button onClick={() => signOut()} className={styles.signinflowbtn}>
              Sign out
            </button>
          </div>

          {!loading && !error && (
            <div className={styles.vouchercontainer}>
              {data.rewards.map((vouchers) => (
                <div key={vouchers.id} className={styles.voucher}>
                  <div>
                    <div>
                      <p>Type: {vouchers.savingType}</p>

                      <p className={styles.voucherdescription}>
                        {vouchers.description}
                      </p>
                    </div>
                  </div>

                  <div>
                    <div>
                      {vouchers.info.map((data) => (
                        <div>
                          <p>Expiration Date: {data.valid}</p>

                          <p>
                            Code:{' '}
                            <span className={styles.vouchercode}>
                              {data.code}
                            </span>
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </>
    );
  }

  return (
    <>
      <MainMenu />

      <div className="container">
        <div className={styles.signinflow}>
          <button onClick={() => signIn('')} className={styles.signinflowbtn}>
            Sign in
          </button>

          <p>
            You are not currently signed in. Sign in here to view your rewards.
          </p>
        </div>
      </div>
    </>
  );
};

export default withApollo(Rewards);