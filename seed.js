const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  // Создаем профиль пользователя (например, владельца квартиры)
  const profile = await prisma.profile.create({
    data: {
      clerkId: "clerk-123", // Идентификатор владельца
      firstName: "Alice",
      lastName: "Smith",
      username: "alice_smith",
      email: "alice@example.com",
      profileImage: "http://example.com/profile.jpg",
    },
  })

  // Создаем новое свойство (квартиру)
  const property = await prisma.property.create({
    data: {
      name: "Cozy City Apartment", // Название
      tagline: "A comfortable place in the heart of the city", // Краткое описание
      category: "Apartment", // Категория
      image: "http://example.com/apartment.jpg", // Изображение
      country: "USA", // Страна
      description: "A lovely apartment close to all the city attractions.", // Описание
      price: 120, // Цена за ночь
      guests: 4, // Количество гостей
      beds: 2, // Количество кроватей
      breakfast: 1, // Завтрак включен
      amenities: "WiFi, Air conditioning, Heating", // Удобства
      profileId: profile.clerkId, // Связь с владельцем
    },
  })

  console.log('Новое свойство добавлено:', property)

  // Создаем бронирование для этого свойства
  const booking = await prisma.booking.create({
    data: {
      profileId: profile.clerkId, // Идентификатор пользователя, который бронирует
      propertyId: property.id, // Идентификатор объекта недвижимости
      orderTotal: 240, // Общая стоимость бронирования
      totalNights: 2, // Количество ночей
      checkIn: new Date('2025-03-01T14:00:00Z'), // Дата заезда
      checkOut: new Date('2025-03-03T10:00:00Z'), // Дата выезда
      paymentStatus: true, // Статус оплаты
    },
  })

  console.log('Бронирование успешно добавлено:', booking)
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
