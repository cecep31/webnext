import {Button} from '@material-ui/core';
import { useRouter } from 'next/router';
import Head from 'next/head';

const about = () => {
    const router = useRouter()
    return (
        <div>
            <Head>
                <title>About</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            </Head>
            <main>
                <div className=""></div>
                <Button variant="contained" size="small" color="primary" onClick={() => router.push('/')}>sssss</Button>
                
            </main>
        </div>
    )
}

export default about