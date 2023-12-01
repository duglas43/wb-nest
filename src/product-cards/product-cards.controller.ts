import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { ProductCardsService } from './product-cards.service';
import {
  CreateProductCardDto,
  UpdateProductCardDto,
  ProductCardDto,
} from './dto';
import {
  ApiProductCardResponseDto,
  ApiOkResponseWithError,
  ApiCreatedResponseWithError,
} from 'src/types';
import {
  ApiTags,
  ApiNotFoundResponse,
  ApiOperation,
  ApiBearerAuth,
} from '@nestjs/swagger';

@ApiBearerAuth()
@UseGuards(AuthGuard)
@ApiTags('Карточки товаров')
@Controller('product-cards')
export class ProductCardsController {
  constructor(private readonly productCardsService: ProductCardsService) {}

  @Post()
  @ApiOperation({
    summary: 'Создать карточку товара',
  })
  @ApiCreatedResponseWithError()
  create(@Body() createProductCardDto: CreateProductCardDto) {
    return this.productCardsService.create(createProductCardDto);
  }

  @Get(':vendorCode')
  @ApiOperation({
    summary: 'Получить карточку товара по vendorCode',
    description:
      'По умолчанию созданы 3 карточки. vendorCode: some_1, some_2, some_3',
  })
  @ApiNotFoundResponse({
    schema: {
      example: {
        statusCode: 404,
        message: 'NotFound',
      },
    },
  })
  @ApiProductCardResponseDto(ProductCardDto)
  findOne(@Param('vendorCode') vendorCode: string) {
    return this.productCardsService.findOne(vendorCode);
  }

  @Patch('')
  @ApiOperation({
    summary: 'Обновить карточку товара',
  })
  @ApiOkResponseWithError()
  @ApiNotFoundResponse({
    schema: {
      example: {
        statusCode: 404,
        message: 'NotFound',
      },
    },
  })
  update(@Body() updateProductCardDto: UpdateProductCardDto) {
    return this.productCardsService.update(updateProductCardDto);
  }

  @Delete(':imtId')
  @ApiOperation({
    summary: 'Удалить карточку товара по imtId',
    description: 'По умолчанию созданы 3 карточки. imtId: 1, 2, 3',
  })
  @ApiOkResponseWithError()
  @ApiNotFoundResponse({
    schema: {
      example: {
        statusCode: 404,
        message: 'NotFound',
      },
    },
  })
  remove(@Param('imtId', ParseIntPipe) imtId: number) {
    return this.productCardsService.remove(imtId);
  }
}
