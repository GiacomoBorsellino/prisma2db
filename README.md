# prisma2db
1) Crea schema prisma
npx prisma init --datasource-provider postgresql
2) Genera/Rigenera il prisma client aggiornandolo e permettendo l'uso del model neogenerato
npx prisma generate --schema prisma/schema1.prisma
npx prisma generate --schema prisma/schema2.prisma
3) Crea dei model a partire da tabelle già presenti
npx prisma db pull