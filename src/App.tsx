import { useState } from "react";
import { Form } from "./components/Form";
import { PostForm } from "./components/PostForm";

function App() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <main className="w-full h-screen overflow-x-hidden flex justify-center items-center">
      {!submitted ? <Form onSubmit={() => setSubmitted(true)} /> : <PostForm />}
    </main>
  );
}

export default App;
