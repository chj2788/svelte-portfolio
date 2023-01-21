import { ghpages } from 'gh-pages'

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'deploy',
        repo: 'https://github.com/chj2788/svelte-portfolio.git', // Update to point to your repository  
        user: {
            name: 'Alice Chang', // update to use your name
            email: 'hyunjin.alice.chang@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)