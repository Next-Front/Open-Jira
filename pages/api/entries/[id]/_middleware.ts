import { NextFetchEvent, NextRequest, NextResponse} from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {

  const id = req.page.params?.id || '';

  const checkMongoId = new RegExp('^[0-9a-fA-F]{24}$');

  if( !checkMongoId.test(id) ) {
    return new Response( 
      JSON.stringify({message: 'Error', error: 'invalid id'}), 
      { 
        status: 400,
        headers: {
          'Content-Type': 'aplication/json'
        }
      }
    );
  }

  return NextResponse.next();

}