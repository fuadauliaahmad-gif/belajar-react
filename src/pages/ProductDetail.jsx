import { useParams } from "react-router";

function ProductDetail() {
    const { id } = useParams ();

    return (
        <div>
            <h1>Detail Produk</h1>
            <p>ID Priduk {id}</p>
        </div>
    );
}

export default ProductDetail;