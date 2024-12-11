// Username dan password yang benar
const validUsername = 'admin';
const validPassword = '12345';

// Ambil elemen-elemen dari form
const loginForm = document.getElementById('loginForm');
const usernameField = document.getElementById('username');
const passwordField = document.getElementById('password');
const errorMessage = document.getElementById('errorMessage');

// Event listener saat form login disubmit
loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Mencegah reload halaman

  // Ambil username dan password yang dimasukkan
  const username = usernameField.value;
  const password = passwordField.value;

  // Cek apakah username dan password valid
  if (username === validUsername && password === validPassword) {
    alert('Login berhasil!');
    errorMessage.textContent = ''; // Hapus pesan error
    // Arahkan ke halaman lain (misalnya dashboard) atau tampilkan konten admin
    window.location.href = 'dashboard.html'; // Ganti dengan URL yang sesuai
  } else {
    errorMessage.textContent = 'Username atau password salah!';
  }
});