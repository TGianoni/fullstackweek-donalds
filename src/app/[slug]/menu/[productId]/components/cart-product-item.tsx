import { ChevronLeftIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/helpers/format-currency";

import { CartProduct } from "../../contexts/cart";

interface CartItemProps {
    product: CartProduct
}

const CartProductItem = ({product}: CartItemProps) => {
    return ( 
        <div className="flex items-center justify-between">
            {/* ESQUERDA */}
            <div className="flex items-center gap-3">
            <div className="relative h-20 w-20 rounded-xl bg-gray-100">
                <Image src={product.imageUrl} alt={product.name} fill/>
            </div>
            <div className="space-y-1">
                <p className="text-xs max-w-[90%] truncate text-ellipsis">{product.name}</p>
                <p className="text-sm font-semibold">{formatCurrency(product.price)}</p>
                {/* QUANTIDADE */}
                <div className="flex item-center-gap-1 text-center">
                <Button className="w-7 h-7 rounded-lg" variant="outline">
                    <ChevronLeftIcon size={16}/>
                </Button>
                <p className="w-7 text-xs">{product.quantity}</p>
                <Button className="w-7 h-7 rounded-lg" variant="destructive">
                    <ChevronRightIcon size={16}/>
                </Button>
                </div>
            </div>
            </div>
            {/* DIREITA BOTÃO DELETAR*/}
            <Button className="h-7 w-7 rounded-lg" variant="outline">
                <TrashIcon />
            </Button>

        </div>
     );
}
 
export default CartProductItem;