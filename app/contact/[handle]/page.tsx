import React from 'react';
import ProductSlider from "@/app/contact/productslider/ProductSlider";
// Next.js-ում դինամիկ պարամետրերը ստանալու համար
interface PageProps {
    params: Promise<{ handle: string }> | { handle: string };
}

const ProductDetailPage = async ({ params }: PageProps) => {
    // Ստանում ենք handle-ը URL-ից
    const resolvedParams = await params;
    const handle = resolvedParams.handle;

    // Բեռնում ենք բոլոր պրոդուկտները
    const res = await fetch("https://www.theirnibs.com/collections/all/products.json");
    const data = await res.json();
    const products = data.products || [];

    // Գտնում ենք կոնկրետ այն ապրանքը, որի handle-ը համապատասխանում է URL-ի handle-ին
    const product = products.find((item: any) => item.handle === handle);

    // Եթե ապրանքը չի գտնվել
    if (!product) {
        return <div style={{ padding: '20px' }}>Ապրանքը չի գտնվել</div>;
    }

    return (
        <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
            <h1>{product.title}</h1>
            
            {/* Ապրանքի նկարագրությունը */}
            <div 
                style={{ margin: '20px 0', lineHeight: '1.6' }}
                dangerouslySetInnerHTML={{ __html: product.body_html }} 
            />

            <h2>Բոլոր նկարները</h2>
            {/* Ցուցադրում ենք տվյալ ապրանքի բոլոր նկարները */}
           <ProductSlider images={product.images} title={product.title} />
        </div>
    );
};

export default ProductDetailPage;