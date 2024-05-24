import { Flex, Image, Space } from 'antd'

export const Cart = () => {
    return (
        <Flex className="text-white pt-40" justify="space-between">
            <div className="container lg:px-28">
                <Space
                    wrap={true}
                    className="w-1/2"
                    direction={'vertical'}
                    size={70}
                >
                    <h1 className="text-2xl">Meu Pedido</h1>
                    <Space>
                        <Flex wrap={true} align="center" gap={14}>
                            <Image
                                className="!w-20  !h-20"
                                src="./product.png"
                                alt="pe"
                            />
                            <Flex vertical align="start">
                                <div className="flex gap-5">
                                    <p className="text-2xl">
                                        {' '}
                                        1 x Salada Radish
                                    </p>
                                    <span className="text-sm text-light-400">
                                        R$ 25,97
                                    </span>
                                </div>

                                <button className="text-red-500  text-xs">
                                    Excluir
                                </button>
                            </Flex>
                        </Flex>
                    </Space>
                </Space>
                <Space className="w-1/2" direction={'vertical'} size={70}>
                    <h1 className="text-2xl">Pagamento</h1>
                </Space>
            </div>
        </Flex>
    )
}
