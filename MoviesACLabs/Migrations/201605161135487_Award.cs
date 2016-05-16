namespace MoviesACLabs.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Award : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Award",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        ActorID = c.Int(nullable: false),
                        Title = c.String(),
                        Description = c.String(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Actor", t => t.ActorID, cascadeDelete: true)
                .Index(t => t.ActorID);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Award", "ActorID", "dbo.Actor");
            DropIndex("dbo.Award", new[] { "ActorID" });
            DropTable("dbo.Award");
        }
    }
}
