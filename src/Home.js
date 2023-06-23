import BusinessLog from './Busines.jpg';

export default function Home() {
   return(
    <section class="text-gray-600 body-font">
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <img class="object-cover object-center rounded" alt="" src={BusinessLog} height="800" width="700"/>
      </div>
      <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Oracle CX Aplications
        </h1>
        <p class="mb-8 leading-relaxed">Built on a cloud platform that incorporates best practices and applied emerging technologies, Oracle Cloud CX offers tools simple enough for business users to manage, yet powerful enough for developers to extend. Oracle CX applications are innovative and flexible, and provide consistent performance and security.</p>
      </div>
    </div>
  </section>
    );

    
}