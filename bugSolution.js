```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const intervalIdRef = useRef(null);

  useEffect(() => {
    // Correct logic: Always clear the interval
    intervalIdRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, []);

  return <div>Count: {count}</div>;
}
```