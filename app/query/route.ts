import { db } from "@vercel/postgres";


// async function listInvoices() {
  // 	const data = await client.sql`
  //     SELECT invoices.amount, customers.name
  //     FROM invoices
  //     JOIN customers ON invoices.customer_id = customers.id
  //     WHERE invoices.amount = 666;
  //   `;
  
  // 	return data.rows;
  // }
  
  export async function GET() {
    // return Response.json({
      //   message:
      //     'Uncomment this file and remove this line. You can delete this file when you are finished.',
      // });
      
    try {
      const client = await db.connect().then((res)=>console.log(res)).catch(err=>console.error('error found here::', err))

      // const data = await client.sql`SELECT 1;`
  	  return Response.json({"hello": "world"});
    } catch (error) {
      return Response.json({ error }, { status: 500 });
    }
}