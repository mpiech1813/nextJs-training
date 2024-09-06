// layouts can be for particular page or global

export default function BlogLayout({ children }) {
  return (
    <div>
      <h2>This is blog layout</h2>
      {children}
    </div>
  );
}
