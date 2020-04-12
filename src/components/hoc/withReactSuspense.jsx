import React from 'react';
import Preloader from '../../reusingComponent/animation/Preloader';

 const withReactSuspense = (Component) => {
    return (props) => {
        return <React.Suspense fallback={<Preloader />}>
            <Component {...props} />
            </ React.Suspense>
    };
}

export default withReactSuspense