```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: only updates count if previous count is less than 5
    if (count < 5) {
      const intervalId = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [count]);

  return <div>Count: {count}</div>;
}
```