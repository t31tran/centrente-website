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
    story_p1: 'Centrente is a Trancent venture. Trancent is a Vietnamese-French group whose work moves between Saigon, Hanoi, Paris, and Lille. The name is a portmanteau of centre — because the centre of a city, the centre of a country, the centre of an idea is where this house intends to live.',
    story_p2: 'We chose Saigon for the reasons everyone who has lived here knows. The food at three in the morning. The hours kept differently. The opening of an alleyway at six. The smell of the river after rain. The unembarrassed warmth of people who do not need to be asked twice. Vietnam taught a generation of us how to live; Centrente is, in part, how we begin to say it back.',
    story_p3: 'The house is built by Trancent. The hospitality will be Vietnamese, the precision French. The wines European, the cuisine French, the view Saigon\'s, the service uncompromising. Behind every detail, the same intention: that a stay here feels like being looked after by people who actually like that you came.',
    story_p4: 'We owe Vietnam a great deal. Centrente is how we say thank you.',
    le13_tradition_eyebrow: 'The Tradition', le13_tradition_h3: 'A form, <em>kept alive.</em>',
    le13_tradition_p: 'Le 13 honours the cercle — the European tradition of a private gaming room set inside a house. Quiet, slow, played at the right hour with the right people. We are bringing it to Saigon.',
    le13_membership_eyebrow: 'Membership', le13_membership_h3: 'By <em>introduction.</em>',
    le13_membership_p: 'Access to Le 13 is by introduction or by request through the concierge. Membership is unannounced, the names kept by the house. There is no card; the door knows you.',
    le13_hours_eyebrow: 'Hours', le13_hours_h3: 'After <em>dusk.</em>',
    le13_hours_p: 'Open from twenty hundred until late, every night the city is awake. Closed two days a year — Tết and the night before.',
    le21_menu_eyebrow: 'The Menu', le21_menu_h3: 'Short, <em>seasonal.</em>',
    le21_menu_p: 'A single tasting menu, written by the season and the morning\'s market. Eight courses, two hours, no choices to make at the table. À la carte is not served. We do not believe in choosing under candlelight.',
    le21_service_eyebrow: 'The Service', le21_service_h3: 'Two seatings, <em>every night.</em>',
    le21_service_p: 'Dinner only. Two seatings — 19:00 and 21:30. Tuesday through Saturday. Reservations open ninety days in advance for 130 Club members, sixty days for the public, by the concierge or in person.',
    le21_footnote: 'Michelin-track — never claimed before earned. Opening with the house.',
    belv_pool_eyebrow: 'The Pool', belv_pool_h3: 'Lanes, sky, <em>no separation.</em>',
    belv_pool_p: 'An infinity pool that meets the Saigon skyline at one edge. Twenty-five metres, four lanes when the city is sleeping, open water from afternoon to closing. Heated through the cooler months.',
    belv_bar_eyebrow: 'The Bar', belv_bar_h3: 'A short list, <em>mixed by hand.</em>',
    belv_bar_p: 'A small list of cocktails, a smaller list of spirits, a serious list of wines by the glass. No bottle service in the bar; for that, see Le Comptoir. The bartenders trained in Hanoi, Tokyo, and Paris.',
    belv_cabanas_eyebrow: 'The Cabanas', belv_cabanas_h3: 'Eight, <em>by the half-day.</em>',
    belv_cabanas_p: 'Eight private cabanas along the pool — by reservation, by the half-day or the day. Each with shade, service, a closed door if you want one. Booked through the concierge.'
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
    story_p1: 'Centrente est une aventure Trancent. Trancent est un groupe franco-vietnamien dont l\'activité se déploie entre Saïgon, Hanoï, Paris et Lille. Le nom est un mot-valise du mot centre — parce que le centre d\'une ville, le centre d\'un pays, le centre d\'une idée, voilà où cette maison entend vivre.',
    story_p2: 'Nous avons choisi Saïgon pour les raisons que tous ceux qui y ont vécu connaissent. La cuisine à trois heures du matin. Les heures que l\'on tient autrement. L\'ouverture d\'une ruelle à six heures. L\'odeur de la rivière après la pluie. La chaleur sans pudeur de gens qui n\'ont pas besoin qu\'on leur demande deux fois. Le Viêt Nam a appris à toute une génération d\'entre nous comment vivre ; Centrente est, en partie, la manière dont nous commençons à le lui rendre.',
    story_p3: 'La maison est construite par Trancent. L\'hospitalité sera vietnamienne, la précision française. Les vins européens, la cuisine française, la vue saïgonnaise, le service sans compromis. Derrière chaque détail, la même intention : qu\'un séjour ici donne le sentiment d\'être pris en charge par des gens qui sont sincèrement heureux que vous soyez venu.',
    story_p4: 'Nous devons beaucoup au Viêt Nam. Centrente est notre façon de dire merci.',
    le13_tradition_eyebrow: 'La Tradition', le13_tradition_h3: 'Une forme, <em>gardée vivante.</em>',
    le13_tradition_p: 'Le 13 honore le cercle — la tradition européenne d\'une salle de jeu privée installée dans une maison. Silencieux, lent, joué à la bonne heure avec les bonnes personnes. Nous l\'apportons à Saïgon.',
    le13_membership_eyebrow: 'Adhésion', le13_membership_h3: 'Sur <em>introduction.</em>',
    le13_membership_p: 'L\'accès au Le 13 se fait sur introduction ou sur demande auprès du concierge. L\'adhésion n\'est pas annoncée, les noms sont gardés par la maison. Il n\'y a pas de carte ; la porte vous reconnaît.',
    le13_hours_eyebrow: 'Horaires', le13_hours_h3: 'Après <em>le crépuscule.</em>',
    le13_hours_p: 'Ouvert de vingt heures jusqu\'à tard, chaque nuit que la ville reste éveillée. Fermé deux jours par an — Tết et la veille.',
    le21_menu_eyebrow: 'Le Menu', le21_menu_h3: 'Court, <em>de saison.</em>',
    le21_menu_p: 'Un seul menu dégustation, écrit par la saison et le marché du matin. Huit services, deux heures, aucun choix à faire à table. La carte n\'est pas servie. Nous ne croyons pas qu\'on choisit à la lueur d\'une bougie.',
    le21_service_eyebrow: 'Le Service', le21_service_h3: 'Deux services, <em>chaque soir.</em>',
    le21_service_p: 'Dîner uniquement. Deux services — 19h00 et 21h30. Du mardi au samedi. Réservations ouvertes quatre-vingt-dix jours à l\'avance pour les membres du 130 Club, soixante jours pour le public, auprès du concierge ou en personne.',
    le21_footnote: 'Sur la trace d\'une étoile Michelin — jamais revendiquée avant d\'être méritée. Ouverture avec la maison.',
    belv_pool_eyebrow: 'La Piscine', belv_pool_h3: 'Couloirs, ciel, <em>sans séparation.</em>',
    belv_pool_p: 'Une piscine à débordement qui rencontre l\'horizon de Saïgon d\'un côté. Vingt-cinq mètres, quatre couloirs lorsque la ville dort, eau libre de l\'après-midi à la fermeture. Chauffée pendant les mois plus frais.',
    belv_bar_eyebrow: 'Le Bar', belv_bar_h3: 'Une carte courte, <em>faite à la main.</em>',
    belv_bar_p: 'Une petite carte de cocktails, une plus petite de spiritueux, une sérieuse de vins au verre. Pas de service de bouteilles au bar ; pour cela, voir Le Comptoir. Les barmen ont été formés à Hanoï, Tokyo et Paris.',
    belv_cabanas_eyebrow: 'Les Cabanas', belv_cabanas_h3: 'Huit, <em>par demi-journée.</em>',
    belv_cabanas_p: 'Huit cabanas privées le long de la piscine — sur réservation, par demi-journée ou journée. Chacune avec ombre, service, une porte fermée si vous le souhaitez. Réservées auprès du concierge.'
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
    story_p1: 'Centrente là một dự án của Trancent. Trancent là một tập đoàn Việt-Pháp với hoạt động trải dài giữa Sài Gòn, Hà Nội, Paris và Lille. Cái tên là sự kết hợp từ centre — bởi trung tâm của một thành phố, trung tâm của một đất nước, trung tâm của một ý tưởng chính là nơi mà ngôi nhà này muốn tồn tại.',
    story_p2: 'Chúng tôi chọn Sài Gòn vì những lý do mà bất cứ ai đã từng sống ở đây đều biết. Bữa ăn lúc ba giờ sáng. Những giờ giấc được giữ theo cách khác. Một con hẻm mở ra lúc sáu giờ. Mùi sông sau cơn mưa. Sự ấm áp không e ngại của những con người không cần được hỏi đến lần thứ hai. Việt Nam đã dạy cả một thế hệ chúng tôi cách sống; Centrente là một phần cách chúng tôi bắt đầu đáp lại.',
    story_p3: 'Ngôi nhà được xây dựng bởi Trancent. Sự hiếu khách sẽ mang chất Việt, sự chính xác mang chất Pháp. Rượu vang châu Âu, ẩm thực Pháp, tầm nhìn của Sài Gòn, sự phục vụ không thoả hiệp. Đằng sau từng chi tiết, cùng một ý định: để một lần lưu trú ở đây mang cảm giác được chăm sóc bởi những người thực sự vui vì bạn đến.',
    story_p4: 'Chúng tôi nợ Việt Nam rất nhiều. Centrente là cách chúng tôi nói lời cảm ơn.',
    le13_tradition_eyebrow: 'Truyền Thống', le13_tradition_h3: 'Một hình thức, <em>được gìn giữ.</em>',
    le13_tradition_p: 'Le 13 tôn vinh cercle — truyền thống châu Âu về một phòng chơi riêng tư trong một ngôi nhà. Yên tĩnh, chậm rãi, chơi vào đúng giờ với đúng người. Chúng tôi mang nó đến Sài Gòn.',
    le13_membership_eyebrow: 'Thành Viên', le13_membership_h3: 'Theo <em>lời giới thiệu.</em>',
    le13_membership_p: 'Việc tiếp cận Le 13 là theo lời giới thiệu hoặc theo yêu cầu qua concierge. Tư cách thành viên không được công bố, các tên được ngôi nhà giữ kín. Không có thẻ; cánh cửa biết bạn.',
    le13_hours_eyebrow: 'Giờ Mở Cửa', le13_hours_h3: 'Sau <em>hoàng hôn.</em>',
    le13_hours_p: 'Mở cửa từ hai mươi giờ đến khuya, mỗi đêm thành phố còn thức. Đóng cửa hai ngày một năm — Tết và đêm trước Tết.',
    le21_menu_eyebrow: 'Thực Đơn', le21_menu_h3: 'Ngắn, <em>theo mùa.</em>',
    le21_menu_p: 'Một thực đơn nếm thử duy nhất, được viết theo mùa và chợ buổi sáng. Tám món, hai giờ, không có lựa chọn nào để đưa ra tại bàn. Không phục vụ gọi món riêng lẻ. Chúng tôi không tin vào việc chọn dưới ánh nến.',
    le21_service_eyebrow: 'Phục Vụ', le21_service_h3: 'Hai phiên, <em>mỗi tối.</em>',
    le21_service_p: 'Chỉ bữa tối. Hai phiên — 19:00 và 21:30. Từ thứ Ba đến thứ Bảy. Đặt chỗ mở chín mươi ngày trước cho thành viên 130 Club, sáu mươi ngày cho công chúng, qua concierge hoặc trực tiếp.',
    le21_footnote: 'Hướng đến sao Michelin — không bao giờ tuyên bố trước khi xứng đáng. Khai trương cùng ngôi nhà.',
    belv_pool_eyebrow: 'Hồ Bơi', belv_pool_h3: 'Đường bơi, bầu trời, <em>không ranh giới.</em>',
    belv_pool_p: 'Một hồ bơi vô cực gặp đường chân trời Sài Gòn ở một cạnh. Hai mươi lăm mét, bốn đường bơi khi thành phố ngủ, mặt nước mở từ chiều đến giờ đóng cửa. Được làm ấm trong những tháng mát hơn.',
    belv_bar_eyebrow: 'Quầy Bar', belv_bar_h3: 'Một thực đơn ngắn, <em>pha bằng tay.</em>',
    belv_bar_p: 'Một thực đơn cocktail nhỏ, một thực đơn rượu mạnh nhỏ hơn, một thực đơn nghiêm túc về rượu vang theo ly. Không có dịch vụ chai tại bar; cho điều đó, hãy xem Le Comptoir. Các bartender được đào tạo tại Hà Nội, Tokyo và Paris.',
    belv_cabanas_eyebrow: 'Cabana', belv_cabanas_h3: 'Tám, <em>theo nửa ngày.</em>',
    belv_cabanas_p: 'Tám cabana riêng dọc theo hồ bơi — theo đặt chỗ, theo nửa ngày hoặc cả ngày. Mỗi cabana có bóng râm, dịch vụ, cánh cửa khép kín nếu bạn muốn. Đặt qua concierge.'
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
