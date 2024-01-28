import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import { envConfig } from "./config/env.config"
import { INestApplication } from "@nestjs/common"

async function bootstrap() {
  const app: INestApplication<any> = await NestFactory.create(AppModule)
  app.setGlobalPrefix("api")
  app.enableCors()
  await app.listen(envConfig.apiPort)
}

bootstrap()
