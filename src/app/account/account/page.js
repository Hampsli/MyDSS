'use client';

import { useSession, signIn, signOut } from 'next-auth/react';

import { useQuery } from '@apollo/client';

import { GET_ACCOUNT } from '../../queries/clientQueries';

import withApollo from '../../utils/withApollo';

import MainMenu from '../../components/MainMenu';

import styles from './page.module.css';

const Account = () => {
  const { loading, error, data } = useQuery(GET_ACCOUNT);

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
            <div>
              {data.account.map((account) => (
                <div key={account.id}>
                  <h1>{account.name}</h1>

                  <p>User ID: {account.id}</p>

                  <p>Country: {account.country}</p>

                  <p>Giftcard ID: {account.giftCardId}</p>

                  <p>Address: {account.address}</p>
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
            You are not currently signed in. Sign in here to view your profile.
          </p>
        </div>
      </div>
    </>
  );
};

export default withApollo(Account);