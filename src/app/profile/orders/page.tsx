import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Heart } from "lucide-react";

const Page = () => {
 const mockData = {
    orders: 12,
    wishlistItems: 8,
    recentlyViewed: 15,
    products: 6,
    totalSales: 2450,
    rewardPoints: 1250,
    coupons: 3,
  };
 return (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
  {/* My Orders */}
  <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
    <CardHeader>
      <CardTitle className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShoppingBag className="w-5 h-5 text-blue-600" />
          My Orders
        </div>
        <Badge variant="secondary">{mockData.orders}</Badge>
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-3">
      <div className="p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
        <div className="flex justify-between items-start mb-2">
          <span className="font-semibold">Order #1234</span>
          <Badge
            variant="outline"
            className="text-green-600 border-green-600"
          >
            Delivered
          </Badge>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Digital Art Collection
        </p>
        <p className="text-sm font-semibold">$89.99</p>
      </div>
      <div className="p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
        <div className="flex justify-between items-start mb-2">
          <span className="font-semibold">Order #1233</span>
          <Badge
            variant="outline"
            className="text-blue-600 border-blue-600"
          >
            Shipped
          </Badge>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Premium Template
        </p>
        <p className="text-sm font-semibold">$45.00</p>
      </div>
      <Button variant="outline" className="w-full">
        View All Orders
      </Button>
    </CardContent>
  </Card>

  {/* Wishlist */}
  <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
    <CardHeader>
      <CardTitle className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Heart className="w-5 h-5 text-red-600" />
          Wishlist
        </div>
        <Badge variant="secondary">{mockData.wishlistItems}</Badge>
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-3 ">
      <div className="p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg"></div>
          <div className="flex-1">
            <p className="font-semibold">Modern UI Kit</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              $29.99
            </p>
          </div>
        </div>
      </div>
      <div className="p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg"></div>
          <div className="flex-1">
            <p className="font-semibold">Icon Pack Pro</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              $19.99
            </p>
          </div>
        </div>
      </div>
      <Button variant="outline" className="w-full">
        View All Items
      </Button>
    </CardContent>
  </Card>
</div>
 );
}

export default Page;
