import React, { lazy, Suspense } from "react";

const LoremIpsum = lazy(() => import('./LoremIpsum'));

const LazyLoadingDemo = () => {
    return(
        <div className="container">
            <h1 className="display-4">11. Lazy Loading Demo</h1>
            <h6 className="lead">
                <ol>
                    <li>Illustrate Lazy Loading Concept in React</li>
                    <li>Have the Lorem Ipsum component be lazy loaded into this application</li>
                </ol>
            </h6>
            <Suspense fallback={<p className="display-6">Loading</p>}>
                <LoremIpsum />
            </Suspense>
        </div>
    );
};

export default LazyLoadingDemo;