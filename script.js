document.addEventListener("DOMContentLoaded", () => {

  // ==========================================
  // 1. MENIU LATERAL (CLEAN)
  // ==========================================
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const sideMenuOverlay = document.getElementById('sideMenuOverlay');
  const sideMenu = document.getElementById('sideMenu');
  const closeMenuBtn = document.getElementById('closeMenuBtn');

  function openMenu() {
    if(sideMenuOverlay && sideMenu) {
      sideMenuOverlay.style.display = 'block';
      setTimeout(() => { sideMenuOverlay.style.opacity = '1'; sideMenu.classList.add('active'); }, 10);
    }
  }
  function closeMenu() {
    if(sideMenuOverlay && sideMenu) {
      sideMenu.classList.remove('active');
      sideMenuOverlay.style.opacity = '0';
      setTimeout(() => { sideMenuOverlay.style.display = 'none'; }, 300);
    }
  }

  hamburgerBtn?.addEventListener('click', openMenu);
  closeMenuBtn?.addEventListener('click', closeMenu);
  sideMenuOverlay?.addEventListener('click', closeMenu);

  // Meniul se închide automat când dai click pe link-urile de pagini
  document.querySelectorAll('.nav-link-main').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // ==========================================
  // 2. ANIMATII LA SCROLL
  // ==========================================
  function handleScroll() {
    document.querySelectorAll(".scroll-appear").forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight - 50) {
        el.classList.add("visible");
      }
    });
  }
  window.addEventListener("scroll", handleScroll);
  handleScroll(); 

  // ==========================================
  // 3. FAQ ACCORDION (Aici rezolva interactivitatea FAQ-ului)
  // ==========================================
  const acc = document.querySelectorAll(".accordion-btn");
  acc.forEach(btn => {
    btn.addEventListener("click", function() {
      this.classList.toggle("active");
      const panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  });

  // ==========================================
  // 4. MODAL FORMULAR & WHATSAPP
  // ==========================================
  const modalOverlay = document.getElementById('bookingModalOverlay');
  const openModalBtn = document.getElementById('openBookingModalBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const bookingForm = document.getElementById('bookingForm');

  if (openModalBtn) {
    openModalBtn.addEventListener('click', () => {
      modalOverlay.style.display = 'flex';
      setTimeout(() => { modalOverlay.style.opacity = '1'; }, 10);
    });
  }
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
      modalOverlay.style.opacity = '0';
      setTimeout(() => { modalOverlay.style.display = 'none'; }, 300);
    });
  }

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const n = document.getElementById('f_nume')?.value || '-';
      const p = document.getElementById('f_prenume')?.value || '-';
      const auto = document.getElementById('f_auto')?.value || '-';
      const nr = document.getElementById('f_nr')?.value || '-';
      const tel = document.getElementById('f_telefon')?.value || '-';
      const email = document.getElementById('f_email')?.value || '-';
      const data_prog = document.getElementById('f_data')?.value || '-';
      
      let text = `*PROGRAMARE NOUĂ*%0A%0A👤 *Client:* ${n} ${p}%0A📞 *Tel:* ${tel}%0A📧 *Email:* ${email}%0A%0A🚘 *Auto:* ${auto}%0A- Nr: ${nr}%0A%0A📅 *Data:* ${data_prog}`;

      window.open(`https://wa.me/?text=${text}`, '_blank');
    });
  }

});