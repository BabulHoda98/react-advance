### useEffect
useEffect is a hook in React that allows you to perform side effects in function components.Basically any work outside of the component.Some examples of side effects are:subscriptions,fetching data,derectly updating the DOM, event linteners,temers,etc.


### useEffect hook
-accept two arguments(second optional)
-first argument - cb function
-second argument - devependency array
-by default cb runs on each render (initial and re-render)
-cb can't retun promise (so can't make it async)
-if dependency array empty [], cd runs only on initial render