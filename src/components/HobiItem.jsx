
function HobiItem({
  nama,
  kategori,
  ikon,
  terpilih,
  onPilih
}) {
  return (
    <li
      className={`item-hobi ${terpilih ? "terpilih" : ""} ${kategori.toLowerCase()}`}
      onClick={onPilih}
    >
      <span className="ikon-item">{ikon}</span>
      <strong>{nama}</strong> - {kategori}
    </li>
  );
}

export default HobiItem;
