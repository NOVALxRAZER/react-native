import { View, Text, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import SafeScreen from '../components/safeScreen'
import { Ionicons } from '@expo/vector-icons'
import useProducts from '@/hooks/useProducts';

const CATEGORIES = [
    { name: "All", icon: "grid-outline" as const },
    { name: "Electronics", image: require("@/assets/images/electronics.png") },
    { name: "Fashion", image: require("@/assets/images/fashion.png") },
    { name: "Sports", image: require("@/assets/images/sports.png") },
    { name: "Books", image: require("@/assets/images/books.png") },
];

const ShopScreen = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [category, setCategory] = useState('All')
    const { data: products, isLoading, isError } = useProducts()

    return (
        <SafeScreen>
            <ScrollView
                className='flex-1'
                contentContainerStyle={{ paddingBottom: 100 }}
                showsVerticalScrollIndicator={false}
            >
                {/* HEADER */}
                <View className='px-6 pb-4 pt-6'>
                    <View className='flex-row items-center justify-between mb-6'>
                        <View>
                            <Text className='text-text-primary text-3xl font-bold tracking-tight'>Beranda</Text>
                            <Text className='text-text-secondary text-sm mt-1'>Semua Product</Text>
                        </View>
                        <TouchableOpacity className='bg-surface/50 rounded-full p-3' activeOpacity={0.7}>
                            <Ionicons name='options-outline' size={22} color={'white'} />
                        </TouchableOpacity>
                    </View>
                    {/* SEARCH BAR */}
                    <View className='flex-row bg-surface items-center px-3 py-1 rounded-2xl'>
                        <Ionicons name='search' color={'#666'} size={22} />
                        <TextInput
                            placeholder='Cari Produk...'
                            placeholderTextColor={'#666'}
                            className='flex-1 ml-3 text-base text-text-primary'
                            value={searchQuery}
                            onChangeText={setSearchQuery}
                        />
                    </View>
                </View>
                {/* CATEGORY */}
                <View className='mb-6'>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20 }}>
                        {CATEGORIES.map((cat) => {
                            const isSelected = category === cat.name
                            return (
                                <TouchableOpacity
                                    key={cat.name}
                                    onPress={() => setCategory(cat.name)}
                                    className={`mr-3 rounded-2xl size-20 overflow-hidden items-center justify-center ${isSelected ? "bg-primary" : "bg-surface"}`}
                                >
                                    {cat.icon ? (
                                        <Ionicons name={cat.icon} size={36} color={isSelected ? "#121212" : "#fff"} />
                                    ) : (
                                        <Image source={cat.image} className='size-12' resizeMode='contain' />
                                    )}
                                </TouchableOpacity>
                            )
                        })}
                    </ScrollView>
                </View>
                <View className='px-6 mb-6'>
                    <View className='flex-row items-center justify-between mb-4'>
                        <Text className='text-text-primary text-lg font-bold'>Produk Tersedia</Text>
                        <Text className='text-text-secondary text-sm'>10 produk</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeScreen>
    )
}

export default ShopScreen