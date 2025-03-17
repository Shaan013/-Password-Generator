export function PasswordGenerator(len,useNo,useSC)
{
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';
  
  let ch = letters;
  if(useNo) ch += numbers;
  if(useSC) ch += specialChars;

  let password = '';
  for (let i = 0; i < len; i++) {
    password += ch.charAt(Math.floor(Math.random() * ch.length));
  }
  return password;
}