import { alert } from "@/lib/utils/alert";

export default function MyComponent() {
  const notify = (type, message) => {
    alert(type, message);
  };

  return (
    <div>
      <button onClick={() => notify("error", "Invalid user name or Password")}>
        Mostrar alerta
      </button>
    </div>
  );
}
