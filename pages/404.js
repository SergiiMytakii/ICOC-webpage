// pages/404.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Custom404 = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home page after 1 second

      router.push('/');
 
  }, [router]);

  return (
    <div>
      
    </div>
  );
};

export default Custom404;
