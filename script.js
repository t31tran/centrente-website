// ─── header: scroll-hide + scrolled bg ───
const nav = document.getElementById('nav');
let lastY = 0;
let ticking = false;
addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      const y = scrollY;
      nav.classList.toggle('scrolled', y > 80);
      if (y > 240 && y > lastY + 4) nav.classList.add('hidden');
      else if (y < lastY - 4 || y < 80) nav.classList.remove('hidden');
      lastY = y;
      ticking = false;
    });
    ticking = true;
  }
}, { passive: true });

// ─── mobile menu ───
const navToggle = document.getElementById('nav-toggle');
const navMobile = document.getElementById('nav-mobile');
navToggle?.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  navMobile.classList.toggle('open');
  document.body.style.overflow = navMobile.classList.contains('open') ? 'hidden' : '';
});
navMobile?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navToggle.classList.remove('open');
    navMobile.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ─── i18n ───
const T = {
  en: {
    nav_vision: 'Vision', nav_rooms: 'Rooms', nav_stay: 'The Stay', nav_club: '130 Club', nav_cta: 'Reservations',
    hero_eyebrow: 'A Trancent venture, in conception.',
    hero_h1: 'The next <em>130 metres</em><br/>of Saigon.',
    hero_meta: 'Breaking ground March 2033<br/>Đồng Khởi · District 1 · Hồ Chí Minh City',
    district_caption: 'The District',
    district_h2: 'Anchored in <em>the center.</em>',
    district_p: 'Set in the architectural spine of District 1, CENTRENTE rises above the Saigon River within a short walk of Notre-Dame, Đồng Khởi, and the Independence Palace. The building, the views, and the rhythm of the city share one address.',
    rooms_caption: 'The Rooms',
    rooms_h2: 'Six rooms. <em>Two 130s.</em>',
    rooms_p: 'The house rises thirty-one floors above Đồng Khởi — one hundred and thirty metres of building. Four standard tiers below — Guest, Deluxe, Premium Deluxe, Studio — and two elevated 130s: a 130 Executive among the high floors, and the 130 Pavilions — two duplex residences at the summit, each across two floors.',
    stay_caption: 'The Stay',
    stay_h2: 'A house that asks <em>for less of you.</em>',
    stay_p: 'Arrival in our electric fleet. Mobile unlock at the door. A single panel beside the bed for light, climate, sound, curtain, blackout. Behind every gesture, an energy programme designed to leave Saigon quieter than we found it.',
    le13_caption: 'The Casino',
    le13_h2: 'A casino <em>on the thirteenth floor.</em>',
    le13_p: 'A private casino in the European tradition of the cercle — set on floor 13 of the house, by introduction, by reservation, by membership. Open after dusk, kept by the concierge.',
    le13_footnote: 'Gaming operations subject to Vietnamese licensing — opening contingent on regulatory approval.',
    le21_caption: '21st floor · The Restaurant',
    le21_h2: 'Le Comptoir, <em>a French table at altitude.</em>',
    le21_p: 'Le 21 is our restaurant — French in lineage, Michelin-track from the start, intimate by design. An open kitchen, a deep European cellar, forty-six covers and no more. The kitchen, by Théo Bruyniard.',
    belv_caption: 'The Rooftop · Sky Bar · Infinity Pool',
    belv_h2: 'An infinity pool <em>above the city.</em>',
    belv_p: 'Le Belvédère sits above floor 31 — the open roof of the house. An infinity pool that meets the Saigon skyline, a long sky bar, eight cabanas, an open table for late dinners. Private access from the 130 Pavilion; reservations open to guests of the house from dusk.',
    belv_footnote: 'Open from dusk to late, weather permitting. Reservations open to guests of the house.',
    club_caption: 'The Club',
    club_h2: 'A house <em>that remembers.</em>',
    club_p: '130 Club is our quiet recognition of returning guests — a loyalty programme without points, without tiers. Membership is extended at the discretion of the concierge after the first stay; with it, the house anticipates rather than asks.',
    club_cta: 'By invitation only',
    foot_tag: 'Breaking ground March 2033. Đồng Khởi, District 1, Hồ Chí Minh City. Updates rare and considered.',
    venture_by: 'A venture by',
    foot_currencies_label: 'Settlement, regulation permitting',
    rooms_hint: '← swipe to see all six →',
    story_h2: 'Built in Saigon, <em>with love.</em>',
    story_p1: 'Centrente is a Trancent venture. Trancent is Vietnamese in heart, French in operation — a group founded by Tei Tran, born in Saigon, raised between Hanoi and Lille. The name is a portmanteau of centre — because the centre of a city, the centre of a country, the centre of an idea is where this house intends to live.',
    story_p2: 'We chose Saigon for the reasons everyone who has lived here knows. The food at three in the morning. The hours kept differently. The opening of an alleyway at six. The smell of the river after rain. The unembarrassed warmth of people who do not need to be asked twice. Vietnam taught a generation of us how to live; Centrente is, in part, how we begin to say it back.',
    story_p3: 'The house is built by Vietnamese architects, French designers, Italian craftspeople, a chef from coastal France, and a team of Vietnamese hospitality professionals trained in the great houses of Asia and Europe. The hospitality will be Vietnamese — the precision French. The wines European, the cuisine French, the view Saigon\'s, the service uncompromising. Behind every detail, the same intention: that a stay here feels like being looked after by people who actually like that you came.',
    story_p4: 'We owe Vietnam a great deal. Centrente is how we say thank you.'
  },
  fr: {
    nav_vision: 'Vision', nav_rooms: 'Chambres', nav_stay: 'Le Séjour', nav_club: '130 Club', nav_cta: 'Réservations',
    hero_eyebrow: 'Une aventure Trancent, en conception.',
    hero_h1: 'Les prochains <em>130 mètres</em><br/>de Saïgon.',
    hero_meta: 'Premier coup de pioche mars 2033<br/>Đồng Khởi · District 1 · Hồ Chí Minh-Ville',
    district_caption: 'Le Quartier',
    district_h2: 'Ancrée au <em>centre.</em>',
    district_p: 'Implantée sur l\'épine architecturale du District 1, CENTRENTE s\'élève au-dessus de la rivière de Saïgon, à quelques pas de Notre-Dame, de Đồng Khởi et du Palais de la Réunification. Le bâtiment, les vues et le rythme de la ville partagent une seule adresse.',
    rooms_caption: 'Les Chambres',
    rooms_h2: 'Six chambres. <em>Deux 130.</em>',
    rooms_p: 'La maison s\'élève sur trente-et-un étages au-dessus de Đồng Khởi — cent trente mètres de bâtiment. Quatre catégories en bas — Guest, Deluxe, Premium Deluxe, Studio — et deux 130 d\'exception : un 130 Executive sur chaque étage haut, et les 130 Pavilions — deux résidences duplex au sommet, chacune sur deux étages.',
    stay_caption: 'Le Séjour',
    stay_h2: 'Une maison qui demande <em>moins de vous.</em>',
    stay_p: 'Arrivée dans notre flotte électrique. Ouverture par mobile à la porte. Un seul panneau au chevet du lit pour la lumière, le climat, le son, les rideaux, l\'occultation. Derrière chaque geste, un programme énergétique pensé pour laisser Saïgon plus silencieuse que nous l\'avons trouvée.',
    le13_caption: 'Le Casino',
    le13_h2: 'Un casino <em>au treizième étage.</em>',
    le13_p: 'Un casino privé dans la tradition européenne du cercle — installé au treizième étage de la maison, sur introduction, sur réservation, sur adhésion. Ouvert dès le crépuscule, tenu par le concierge.',
    le13_footnote: 'Opérations de jeu soumises à licence vietnamienne — ouverture subordonnée à l\'approbation réglementaire.',
    le21_caption: '21ᵉ étage · Le Restaurant',
    le21_h2: 'Le Comptoir, <em>une table française en altitude.</em>',
    le21_p: 'Le 21 est notre restaurant — français de lignée, sur la trace d\'une étoile Michelin dès l\'ouverture, intime par dessein. Une cuisine ouverte, une cave européenne profonde, quarante-six couverts et pas un de plus. La cuisine, par Théo Bruyniard.',
    belv_caption: 'Le Toit · Sky Bar · Piscine à débordement',
    belv_h2: 'Une piscine à débordement <em>au-dessus de la ville.</em>',
    belv_p: 'Le Belvédère se trouve au-dessus du 31ᵉ étage — le toit ouvert de la maison. Une piscine à débordement qui rencontre l\'horizon de Saïgon, un long sky bar, huit cabanas, une table ouverte pour les dîners tardifs. Accès privé depuis le 130 Pavilion ; réservations ouvertes aux clients de la maison dès le crépuscule.',
    belv_footnote: 'Ouvert du crépuscule à tard, selon la météo. Réservations ouvertes aux clients de la maison.',
    club_caption: 'Le Club',
    club_h2: 'Une maison <em>qui se souvient.</em>',
    club_p: '130 Club est notre reconnaissance silencieuse des clients fidèles — un programme de fidélité sans points, sans paliers. L\'adhésion est offerte à la discrétion du concierge après le premier séjour ; avec elle, la maison anticipe plutôt qu\'elle ne demande.',
    club_cta: 'Sur invitation uniquement',
    foot_tag: 'Premier coup de pioche mars 2033. Đồng Khởi, District 1, Hồ Chí Minh-Ville. Nouvelles rares et choisies.',
    venture_by: 'Une aventure de',
    foot_currencies_label: 'Règlement, selon la réglementation',
    rooms_hint: '← glissez pour voir les six →',
    story_h2: 'Construite à Saïgon, <em>avec amour.</em>',
    story_p1: 'Centrente est une aventure Trancent. Trancent est vietnamien de cœur, français d\'opération — un groupe fondé par Tei Tran, né à Saïgon, élevé entre Hanoï et Lille. Le nom est un mot-valise du mot centre — parce que le centre d\'une ville, le centre d\'un pays, le centre d\'une idée, voilà où cette maison entend vivre.',
    story_p2: 'Nous avons choisi Saïgon pour les raisons que tous ceux qui y ont vécu connaissent. La cuisine à trois heures du matin. Les heures que l\'on tient autrement. L\'ouverture d\'une ruelle à six heures. L\'odeur de la rivière après la pluie. La chaleur sans pudeur de gens qui n\'ont pas besoin qu\'on leur demande deux fois. Le Viêt Nam a appris à toute une génération d\'entre nous comment vivre ; Centrente est, en partie, la manière dont nous commençons à le lui rendre.',
    story_p3: 'La maison est construite par des architectes vietnamiens, des designers français, des artisans italiens, un chef de la côte française, et une équipe de professionnels de l\'hospitalité vietnamiens formés dans les grandes maisons d\'Asie et d\'Europe. L\'hospitalité sera vietnamienne — la précision française. Les vins européens, la cuisine française, la vue saïgonnaise, le service sans compromis. Derrière chaque détail, la même intention : qu\'un séjour ici donne le sentiment d\'être pris en charge par des gens qui sont sincèrement heureux que vous soyez venu.',
    story_p4: 'Nous devons beaucoup au Viêt Nam. Centrente est notre façon de dire merci.'
  },
  vi: {
    nav_vision: 'Tầm nhìn', nav_rooms: 'Phòng', nav_stay: 'Lưu trú', nav_club: '130 Club', nav_cta: 'Đặt phòng',
    hero_eyebrow: 'Một dự án Trancent, đang hình thành.',
    hero_h1: '<em>130 mét</em> tiếp theo<br/>của Sài Gòn.',
    hero_meta: 'Khởi công tháng 3 năm 2033<br/>Đồng Khởi · Quận 1 · Thành phố Hồ Chí Minh',
    district_caption: 'Khu phố',
    district_h2: 'Tọa lạc tại <em>trung tâm.</em>',
    district_p: 'Nằm trên trục kiến trúc của Quận 1, CENTRENTE vươn cao bên trên sông Sài Gòn, chỉ vài bước chân đến Nhà thờ Đức Bà, Đồng Khởi và Dinh Độc Lập. Toà nhà, tầm nhìn và nhịp sống của thành phố cùng chia sẻ một địa chỉ.',
    rooms_caption: 'Các Phòng',
    rooms_h2: 'Sáu phòng. <em>Hai phòng 130.</em>',
    rooms_p: 'Toà nhà cao ba mươi mốt tầng trên Đồng Khởi — một trăm ba mươi mét chiều cao. Bốn hạng tiêu chuẩn ở dưới — Guest, Deluxe, Premium Deluxe, Studio — và hai phòng 130 đặc biệt: một 130 Executive trên mỗi tầng cao, và các 130 Pavilion — hai dinh thự duplex ở đỉnh, mỗi phòng trải dài hai tầng.',
    stay_caption: 'Lưu trú',
    stay_h2: 'Một ngôi nhà <em>đòi hỏi ít hơn ở bạn.</em>',
    stay_p: 'Đón tiếp bằng đoàn xe điện riêng. Mở cửa bằng điện thoại. Một bảng điều khiển duy nhất cạnh giường cho ánh sáng, nhiệt độ, âm thanh, rèm, chắn sáng. Đằng sau từng cử chỉ, một chương trình năng lượng được thiết kế để Sài Gòn yên tĩnh hơn so với khi chúng tôi đến.',
    le13_caption: 'Casino',
    le13_h2: 'Một casino <em>tại tầng mười ba.</em>',
    le13_p: 'Một casino riêng tư theo truyền thống cercle châu Âu — đặt tại tầng 13 của toà nhà, theo lời giới thiệu, theo đặt trước, theo thành viên. Mở cửa sau hoàng hôn, do concierge phụ trách.',
    le13_footnote: 'Hoạt động cờ bạc tuân theo giấy phép Việt Nam — việc mở cửa phụ thuộc vào phê duyệt của cơ quan quản lý.',
    le21_caption: 'Tầng 21 · Nhà hàng',
    le21_h2: 'Le Comptoir, <em>một bàn ăn Pháp trên cao.</em>',
    le21_p: 'Le 21 là nhà hàng của chúng tôi — Pháp về dòng dõi, hướng đến sao Michelin ngay từ đầu, ấm cúng có chủ ý. Một căn bếp mở, một hầm rượu châu Âu sâu, bốn mươi sáu chỗ ngồi và không hơn. Căn bếp, do Théo Bruyniard điều hành.',
    belv_caption: 'Sân Thượng · Sky Bar · Hồ Bơi Vô Cực',
    belv_h2: 'Một hồ bơi vô cực <em>bên trên thành phố.</em>',
    belv_p: 'Le Belvédère nằm trên tầng 31 — mái nhà mở của ngôi nhà. Một hồ bơi vô cực gặp đường chân trời Sài Gòn, một sky bar dài, tám cabana, một bàn ăn mở cho những bữa tối muộn. Lối vào riêng từ 130 Pavilion; đặt chỗ mở cho khách của ngôi nhà từ hoàng hôn.',
    belv_footnote: 'Mở cửa từ hoàng hôn đến khuya, tuỳ thời tiết. Đặt chỗ mở cho khách của ngôi nhà.',
    club_caption: 'Câu Lạc Bộ',
    club_h2: 'Một ngôi nhà <em>biết nhớ.</em>',
    club_p: '130 Club là sự ghi nhận thầm lặng của chúng tôi dành cho những vị khách quay trở lại — một chương trình thân thiết không điểm thưởng, không cấp bậc. Tư cách thành viên được trao theo quyết định của concierge sau lần lưu trú đầu tiên; với nó, ngôi nhà đoán biết trước thay vì hỏi.',
    club_cta: 'Chỉ theo lời mời',
    foot_tag: 'Khởi công tháng 3 năm 2033. Đồng Khởi, Quận 1, Thành phố Hồ Chí Minh. Tin tức hiếm và được chọn lọc.',
    venture_by: 'Một dự án của',
    foot_currencies_label: 'Thanh toán, tuỳ theo quy định',
    rooms_hint: '← lướt để xem cả sáu →',
    story_h2: 'Được xây tại Sài Gòn, <em>với tình yêu.</em>',
    story_p1: 'Centrente là một dự án của Trancent. Trancent mang trái tim Việt Nam, vận hành theo phong cách Pháp — một tập đoàn được sáng lập bởi Tei Tran, sinh ra tại Sài Gòn, lớn lên giữa Hà Nội và Lille. Cái tên là sự kết hợp từ centre — bởi trung tâm của một thành phố, trung tâm của một đất nước, trung tâm của một ý tưởng chính là nơi mà ngôi nhà này muốn tồn tại.',
    story_p2: 'Chúng tôi chọn Sài Gòn vì những lý do mà bất cứ ai đã từng sống ở đây đều biết. Bữa ăn lúc ba giờ sáng. Những giờ giấc được giữ theo cách khác. Một con hẻm mở ra lúc sáu giờ. Mùi sông sau cơn mưa. Sự ấm áp không e ngại của những con người không cần được hỏi đến lần thứ hai. Việt Nam đã dạy cả một thế hệ chúng tôi cách sống; Centrente là một phần cách chúng tôi bắt đầu đáp lại.',
    story_p3: 'Ngôi nhà được xây dựng bởi các kiến trúc sư Việt Nam, các nhà thiết kế Pháp, các nghệ nhân Ý, một đầu bếp từ miền duyên hải nước Pháp, và một đội ngũ chuyên gia hiếu khách Việt Nam được đào tạo tại những ngôi nhà lớn ở châu Á và châu Âu. Sự hiếu khách sẽ mang chất Việt — sự chính xác mang chất Pháp. Rượu vang châu Âu, ẩm thực Pháp, tầm nhìn của Sài Gòn, sự phục vụ không thoả hiệp. Đằng sau từng chi tiết, cùng một ý định: để một lần lưu trú ở đây mang cảm giác được chăm sóc bởi những người thực sự vui vì bạn đến.',
    story_p4: 'Chúng tôi nợ Việt Nam rất nhiều. Centrente là cách chúng tôi nói lời cảm ơn.'
  }
};

function detectLang() {
  const saved = localStorage.getItem('centrente.lang');
  if (saved && T[saved]) return saved;
  const b = (navigator.language || 'en').toLowerCase();
  if (b.startsWith('vi')) return 'vi';
  if (b.startsWith('fr')) return 'fr';
  return 'en';
}

function applyLang(lang) {
  if (!T[lang]) lang = 'en';
  document.documentElement.lang = lang;
  document.body.dataset.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.dataset.i18n;
    if (T[lang][k]) el.textContent = T[lang][k];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const k = el.dataset.i18nHtml;
    if (T[lang][k]) el.innerHTML = T[lang][k];
  });
  document.querySelectorAll('.lang-toggle .opt').forEach(opt => {
    opt.classList.toggle('on', opt.dataset.lang === lang);
  });
  localStorage.setItem('centrente.lang', lang);
}

applyLang(detectLang());
document.querySelectorAll('.lang-toggle .opt').forEach(opt => {
  opt.addEventListener('click', () => applyLang(opt.dataset.lang));
});
