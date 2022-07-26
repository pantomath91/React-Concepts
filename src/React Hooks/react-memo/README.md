Key Takeaways!

1 -> When a Parent Component re-renders, all Child components will re-render as well.

2 -> React.memo is a higher order component, used with functional components. React.memo will compare the previous props to the next props, and if different, will re-render the component.

3 -> JavaScript Primitives (string, number, boolean) being passed as a prop will work fine with React.memo.

4 -> Arrays, Objects, Functions being passed as a prop will not work with React.memo alone. You'll need to use hooks like useMemo around the Array or Object.

5 -> In a functional component, every re-render will cause everything in the function body to be "re-created". So Arrays, Objects, and Functions will be new and different on every re-render. When these are passes to the Child Component, it will cause the Child to re-render.

6 -> Wrapping Arrays and Objects with the useMemo hook will solve this problem. Better yet, if the dependency array is empty, you should just hoist it out of the function body.

7 -> When passing Functions down as props, and when Functions are used in a dependency array, wrap them in the useCallback hook to avoid re-renders and prevent useEffects from firing on each re-render.

8 -> Don't just memoize all the things. Here is the blog post by Kent about when you should use these memoization techniques:  https://kentcdodds.com/blog/usememo-and-usecallback