import React from 'react';
import Link from 'next/link'; // Եթե Next.js է (կամ ուղղակի <a> թեգ՝ սովորական React-ի դեպքում)

const ContactPage = async () => {
    const res = await fetch("https://www.theirnibs.com/collections/all/products.json");
    const data = await res.json();
    const products = data.products || [];

    return (
        <div style={{ padding: '20px' }}>
            <h1>Մեր ապրանքները</h1>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                {
                    products.map((item:any) => {
                        // Վերցնում ենք միայն առաջին գլխավոր նկարը
                        const mainImage = item.images?.[0]?.src;

                        return (
                            <div key={item.id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px' }}>
                                {/* Տանում ենք դեպի կոնկրետ ապրանքի էջ ըստ handle-ի կամ id-ի */}
                                <Link href={`/contact/${item.handle}`}>
                                    <div style={{ cursor: 'pointer' }}>
                                        {mainImage && (
                                            <img 
                                                src={mainImage} 
                                                alt={item.title} 
                                                style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '4px' }} 
                                            />
                                        )}
                                        <h3 style={{ fontSize: '16px', marginTop: '10px', color: '#333' }}>{item.title}</h3>
                                    </div>
                                </Link>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    ); 
};

export default ContactPage;