function openTab(evt, tabName) {

  if (!evt || !tabName) {
      console.error('Возникла ошибка');
      return;
  }

  const tabcontents = document.getElementsByClassName("tabcontent");
  Array.from(tabcontents).forEach(tabcontent => {
      tabcontent.style.display = "none";
  });

  const tablinks = document.getElementsByClassName("tablink");
  Array.from(tablinks).forEach(tablink => {
      tablink.classList.remove("active");
  });

  const selectedTab = document.getElementById(tabName);
  if (selectedTab) {
      selectedTab.style.display = "block";
  } else {
      console.error(`Таблица с  ${tabName} не найдена`);
  }

  evt.currentTarget.classList.add("active");
}
