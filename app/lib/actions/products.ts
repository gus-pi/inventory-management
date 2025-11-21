import { getCurrentUser } from '../auth';
import { prisma } from '../prisma';

export async function deleteProduct(formaData: FormData) {
    const user = await getCurrentUser();
    const id = String(formaData.get('id'));

    await prisma.product.deleteMany({ where: { id: id, userId: user.id } });
}
