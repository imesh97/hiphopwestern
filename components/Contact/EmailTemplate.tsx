interface EmailTemplateProps {
  firstName: string;
  email: string;
  msg: string;
}

export function EmailTemplate({ firstName, email, msg }: EmailTemplateProps) {
  return (
    <div>
      <h1>name: {firstName}</h1>
      <h4>email: {email}</h4>
      <p>msg: {msg}</p>
    </div>
  );
}
