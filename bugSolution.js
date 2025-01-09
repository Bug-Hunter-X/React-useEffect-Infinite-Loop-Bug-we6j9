```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: This runs only once after mount
    console.log('Mounted');
  }, []);

  return <div>Count: {count}</div>;
}
```