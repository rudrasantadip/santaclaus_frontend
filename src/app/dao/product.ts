export interface Product{
        productId: number;
        productName: string;
        description: string;
        productImage: string;
        price:number;
        discountPercent:number;
        categoryName?:string;
        sampleImages:SampleImage[]
}

export interface SampleImage{
        imageId:number;
        imageUrl:string;
}