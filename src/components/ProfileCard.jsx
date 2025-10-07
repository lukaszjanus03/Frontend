import ProfileParagraph from "./ProfileParagraph";
 
function ProfileCard({ name, email, phone, birthDate }) {
  return (
    <div className="card shadow-sm text-center p-4 mb-4" style={{ width: "18rem" }}>
      <div className="card-body">
        <h4 className="card-title mb-4 text-primary">Profil użytkownika</h4>
 
        <ProfileParagraph label="Imię" title={name} />
        <ProfileParagraph label="Email" title={email} />
        <ProfileParagraph label="Telefon" title={phone} />
        <ProfileParagraph label="Data urodzin" title={birthDate} />
      </div>
    </div>
  );
}
 
export default ProfileCard;
 
 