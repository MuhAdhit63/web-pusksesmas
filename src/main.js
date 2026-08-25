// Initialize Lucide Icons
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    lucide.createIcons();
  }
});

// Mobile Navigation Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// Modal Functions
function openEmergencyModal() {
  const modal = document.getElementById('emergency-modal');
  if (modal) {
    modal.classList.remove('hidden');
  }
}

function closeEmergencyModal() {
  const modal = document.getElementById('emergency-modal');
  if (modal) {
    modal.classList.add('hidden');
  }
}

// Close emergency modal when clicking outside
window.addEventListener('click', (event) => {
  const emgModal = document.getElementById('emergency-modal');
  if (event.target === emgModal) closeEmergencyModal();
});
